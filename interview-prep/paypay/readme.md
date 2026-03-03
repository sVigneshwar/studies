# 🟨 Round 1:

1) go through all the 20 dsa problem i have completed for to get going on algorithms

*** Contains Duplicate - check input length and new Set(input) length 
*** Valid Anagram - 2 input - 1st input map, 2nd input map -1 and remove if 0 (hashmap)
*** Two Sum - hashmap - check diff - if exist return that index
*** Group Anagrams - sort letters = update in object and return object.values, so it is array
*** Top K Frequent Elements - hashmap - get count in hashnmap - sort - loop k times - get top elements - reverse sort and give result
*** Encode and Decode Strings - combine to string length + # - get length, j + 1, j + 1 + length and set i to j+1+length
*** Product of Array Except Self - except self multipley all. (2nd - if 0 > 1, return array(length).fill(0), if 0 > 0, return only index gets value [48, 0, 0, 0] and others gets 0)
*** Longest Consecutive Sequence - check if it is starting point by  num-1, while loop +1, mathc max longest and lenbth
*** Valid Palindrome (two pointers - remove space from left and right and lowercase and compare element )
*** 3Sum (sort, [start+left+right], total > 0 or < 0 or =0 right-- or left++ or left++, check same numbers and skip it)
*** Container With Most Water (max, area, left, right - right-left*minheight - (max, area) - left++ right--)
*** Best Time to Buy and Sell Stock
*** Longest Substring Without Repeating Characters | Medium
*** Longest Repeating Character Replacement
*** Valid Parentheses  | Easy
*** Find Minimum in Rotated Sorted Array
*** Search in Rotated Sorted Array
*** Maximum Product Subarray
*** Maximum Subarray

2) go through all of the basic typescript codings needed for this dsa
3) go trough the some of the most asked dsa for this screening:

For Questions 1 & 2 (Arrays & Strings)
- Contains Duplicate (Easy)                                — Focus: Set usage.
- Valid Anagram (Easy)                                     — Focus: Map frequency counting.
- Two Sum (Easy)                                           — Focus: $O(n)$ lookup.
- Valid Palindrome (Easy)                                  — Focus: String cleaning and two-pointers.
- Isomorphic Strings (Easy)                                — Focus: Pattern mapping (similar to your "010" vowel question).

For Question 3 (Matrices/Simulation)
- Spiral Matrix (Medium)                                   — Focus: 2D array traversal logic.
- Rotate Image (Medium)                                    — Focus: In-place matrix manipulation.
- Set Matrix Zeroes (Medium)                               — Focus: Tracking state in a grid.

For Question 4 (Efficiency & Logic)
- Binary Search (Easy)                                     — Focus: Finding the exact insertion point.
- Product of Array Except Self (Medium)                    — Focus: Avoiding division and $O(n^2)$.
- Longest Substring Without Repeating Characters (Medium)  — Focus: Sliding Window.
- The "L-C" Problem (Mock)                                 — Practice the Sorted Array + Binary Search method we discussed earlier today.

4) attend 1or2 mock interview
5) finally attend the codesignal dsa test

---------------------------------------------------------------

# 🟨 Round 2: JavaScript & TypeScript — The Engine

- **Event Loop:** Macrotasks vs. Microtasks (Promises).
- **Closures:** Practical uses like Encapsulation and Memoization.
- **Prototypal Inheritance:** How JS objects link (avoid using class for the explanation).
- **Scope & Hoisting:** Difference between var, let, const, and "Temporal Dead Zone."
- **this Keyword:** Rules of call, apply, and bind.
- **Async/Await:** Handling errors, Promise.all vs. Promise.race.
- **TS Generics:** Building reusable components with `<T>`.
- **Utility Types:** Partial, Omit, Record, and Pick.

---------------------------------------------------------------

# 🟩 Round 3: React & Implementation — The Craft

- **Virtual DOM:** Reconciliation and the "Diffing" algorithm.
- **Hooks Deep-Dive:** useMemo, useCallback (when to use vs. when NOT to), useRef.
- **State Management:** Context API vs. External Stores (Zustand/Redux).
- **Compound Components:** Designing clean, reusable API patterns for UI components.
- **Performance:** Code Splitting (React.lazy), Virtualized Lists, Debouncing search inputs.
- **Testing:** Jest and React Testing Library (RTL). Focus on behavioral testing.

---------------------------------------------------------------

# 🟧 Round 4: Frontend System Design — The Architect

- **Micro-frontends:** Module Federation vs. Iframes.
- **Security:** XSS (Cross-Site Scripting), CSRF, and Content Security Policy (CSP).
- **Networking:** HTTP/2, WebSockets, and long polling.
- **Caching:** Service Workers, PWA, and Browser Cache headers (ETag, Cache-Control).
- **Core Web Vitals:** LCP, FID, CLS—how to measure and optimize them.
- **Internationalization (i18n):** RTL support, date/currency formatting, and localized assets.

---------------------------------------------------------------

# 🟥 Round 5: Culture & Behavioral — The Fit

- **STAR Method:** Situation, Task, Action, Result (Prepare 5 stories from Zoho).
- **Conflict:** Handling technical disagreements with peers or managers.
- **Mentorship:** How you help junior devs grow.
- **"Why PayPay?":** Focus on "Cashless Japan" and financial inclusion.
- **Ownership:** A time you fixed a production issue at Zoho without being asked.