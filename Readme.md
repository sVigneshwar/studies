
# ✅ Frontend Developer Roadmap Checklist

---

## 🟡 Phase 1: JavaScript (Foundation)

> You need to be comfortable here before React.

### Basics (Completed)
- **Variables:** `var`, `let`, `const`
- **Scope:** function, block, global
- **Hoisting**
- **Data Types:** string, number, boolean, null, undefined, object, array, symbol, bigint
- **Type coercion:** `==` vs `===`

### Functions (Completed)
- Function declaration vs expression
- Arrow functions
- Default & rest parameters
- Higher-order functions

### Arrays & Objects (Completed)
- Array methods: `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`, `sort`
- Object methods: `Object.keys`, `Object.values`, `Object.entries`
- Destructuring (arrays, objects)
- Spread & rest operators

### ES6+ Features (Completed)
- Template literals
- Modules: `import` / `export`
- Optional chaining (`?.`)
- Nullish coalescing (`??`)

### Asynchronous JS (Completed)
- Event loop & call stack
- Callbacks
- Promises (`.then`, `.catch`)
- `async/await`
- `fetch` API

### Advanced
- Closures
- `this` keyword (and binding)
- Prototype & Classes
- Error handling (`try/catch`)

---

## 🔵 Phase 2: React (Core Library)

> Now apply JS concepts in React.

### Basics
- What is React & JSX
- Functional components
- Props (passing data)
- State (`useState`)
- Event handling (`onClick`, `onChange`)

### Intermediate
- Conditional rendering
- Rendering lists (`map` + `key`)
- Forms: controlled vs uncontrolled
- `useEffect` (side effects, dependencies)
- `useRef` (DOM refs, store values)
- Context API (global state)

### Advanced
- Custom hooks
- `useMemo` & `useCallback` (performance)
- Code splitting (`React.lazy`, `Suspense`)
- Error boundaries
- React Router (if not using Next.js)

### Ecosystem
- API calls (`fetch`, Axios)
- Redux Toolkit or Zustand (state management)
- Jest + React Testing Library (testing)

---

## 🟢 Phase 3: TypeScript (with React)

> Now add type safety.

### TS Basics
- Primitive types: string, number, boolean, any, unknown
- Arrays & Tuples
- Union & Intersection types
- Enums
- Interfaces vs Types
- Functions with types (params + return)
- Generics (`<T>`)

### TS in React
- Typing props & default props
- Typing state (`useState`)
- Typing refs (`useRef<HTMLInputElement>`)
- Typing events (`onClick`, `onChange`)
- Typing API responses with interfaces
- Typing custom hooks
- Utility types (`Partial`, `Pick`, `Omit`, `Record`)

---

## 🔴 Phase 4: Next.js (React Framework)

> Once React + TS is clear, move here.

### Basics
- File-based routing (pages or app router)
- Dynamic routes (`[id].tsx`)
- Linking pages (`Link` component)
- Layouts & nesting

### Data Fetching
- `getStaticProps` (SSG)
- `getServerSideProps` (SSR)
- `getStaticPaths` (dynamic pages)
- API routes (`/api`)

### Advanced Features
- Image optimization (`next/image`)
- Fonts (`next/font`)
- Middleware
- Caching strategies

### Deployment
- Deploying on Vercel
- Environment variables
- Connecting with APIs & Databases

---

## 📌 Suggested Mini-Projects at Each Step

### After JS
- To-Do List (arrays, events)
- Fetch & display GitHub users (API + async/await)

### After React
- Counter app (state & props)
- Weather app (API + useEffect)
- Notes app with localStorage (state persistence)

### Meanwhile start leetcode problem solving too

### After TypeScript + React
- E-commerce cart (typed products & cart state)
- Form validation with types
- API data table with sorting/filtering

### After Next.js
- Blog app with dynamic routes & markdown
- Authentication app (NextAuth or JWT)
- Dashboard with charts & API integration

---

## 👉 If you tick off this list step by step, you’ll have:

- Solid JS foundation
- Professional-level React + TS skills
- Modern Next.js knowledge
- A portfolio with 4–6 strong projects