# ⚛️ React Query (TanStack Query) – Full Theory on Data Fetching & Caching

React Query (now part of the TanStack Query) is a powerful library that simplifies data fetching, caching, synchronizing, and updating server state in React applications. It abstracts away common boilerplate code involved in handling APIs, while also improving app performance and user experience.

---

## 📌 What is Server State?

Server state is data that lives on the server, such as results from an API call. Unlike local state (managed with React’s `useState`), server state:
- Requires asynchronous fetching
- Can become outdated
- Must be shared across components
- Needs caching and background updates

React Query is built to manage this complexity.

---

## 🔁 1. Data Fetching with `useQuery`

The `useQuery` hook is used to fetch and cache data from an API. It accepts a `queryKey` and a `queryFn`.

### Key Concepts:
- `queryKey`: Uniquely identifies a query and its cached result.
- `queryFn`: A function that performs the data fetch (e.g., using `fetch` or `axios`).

### Example:
```tsx
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchUsers = async () => {
  const res = await axios.get('/api/users')
  return res.data
}

const Users = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error occurred!</p>

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

---

## ♻️ 2. Query Refetching

You can control when a query refetches data:
- Automatically on window focus
- On interval (polling)
- On mount
- Manually

```tsx
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  refetchOnWindowFocus: true,
  refetchInterval: 60000, // 60 seconds
})
```

Manual refetch:
```tsx
const { refetch } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
})

<button onClick={() => refetch()}>Refetch</button>
```

---

## 🧹 3. Query Invalidation

Invalidate cached queries to refetch data automatically.
```tsx
import { useQueryClient } from '@tanstack/react-query'

const queryClient = useQueryClient()
queryClient.invalidateQueries(['users'])
```

Useful after a mutation (e.g., create/delete):
```tsx
onSuccess: () => {
  queryClient.invalidateQueries(['users'])
}
```

---

## ✍️ 4. Data Mutation with `useMutation`

For POST, PUT, DELETE requests.

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query'

const addUser = async (user) => {
  return await axios.post('/api/users', user)
}

const AddUser = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users'])
    },
  })

  return (
    <button onClick={() => mutation.mutate({ name: 'John' })}>
      Add User
    </button>
  )
}
```

---

## 🧠 5. Optimistic Updates

Improve UX by immediately reflecting UI changes before the server confirms them.

```tsx
useMutation({
  mutationFn: updateUser,
  onMutate: async (newData) => {
    await queryClient.cancelQueries(['user', newData.id])

    const previousData = queryClient.getQueryData(['user', newData.id])
    queryClient.setQueryData(['user', newData.id], newData)

    return { previousData }
  },
  onError: (err, newData, context) => {
    queryClient.setQueryData(['user', newData.id], context.previousData)
  },
  onSettled: (newData) => {
    queryClient.invalidateQueries(['user', newData.id])
  },
})
```

---

## 📦 6. Query Caching & Persistence

React Query caches data automatically. You can configure:
- `staleTime`: Time before data is considered stale
- `cacheTime`: Time before cached data is garbage collected

```tsx
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 30000, // 30s
  cacheTime: 300000, // 5 min
})
```

Persist cache using libraries like `react-query-persist-client` for offline support.

---

## 🛠️ 7. Devtools

Install and use the React Query Devtools for debugging:
```bash
npm install @tanstack/react-query-devtools
```

```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

<ReactQueryDevtools initialIsOpen={false} />
```

---

## 🧵 8. Dependent Queries

When one query depends on another:
```tsx
const { data: user } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
})

const { data: posts } = useQuery({
  queryKey: ['posts', user?.id],
  queryFn: () => fetchPosts(user.id),
  enabled: !!user?.id, // Wait until user is loaded
})
```

---

## 📚 9. Pagination & Infinite Queries

Use `useInfiniteQuery` for loading paginated data.
```tsx
import { useInfiniteQuery } from '@tanstack/react-query'

const fetchProjects = ({ pageParam = 1 }) =>
  axios.get(`/api/projects?page=${pageParam}`)

const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  getNextPageParam: (lastPage, pages) => {
    return lastPage.nextPage
  },
})
```

---

## ✅ Summary

React Query provides:
- Simplified and powerful data fetching
- Automatic caching and revalidation
- Mutations with optimistic updates
- Pagination, devtools, and offline support

Perfect for modern React apps that rely heavily on server state.
