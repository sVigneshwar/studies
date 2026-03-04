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
*** Best Time to Buy and Sell Stock (left 0, right 1, while r<length, l < r => right - left, amtch max for profit, else left = right, right++)
*** Longest Substring Without Repeating Characters - hashmap set - left, max, res - while left same delete left and left++, get max res, size
*** Longest Repeating Character Replacement - // EXPAND right always // SHRINK left when: (r - l + 1) - maxFreq > k // ANSWER is max valid window size
*** Valid Parentheses - psh open brackets in stack, remove closed brackets from stack before checking last open bracket is same as current bracket
*** Find Minimum in Rotated Sorted Array - get left 0, right last, run while, if left is smaller return else get middle, math.min res middle, middle > left , l+1 else r-1
*** Search in Rotated Sorted Array - get middle, if middle is target set result else check if it inside left sorted portion or right, and move left right accordingly. 
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

---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------

# 📋 Interview Rounds — Quick Summary

## 1. The CodeSignal & DSA Battleground (Round 1)
- **Binary Array Management:** The "L-C" index tracking (finding smallest 0, setting to 0).
- **String Manipulation:** Vowel reversing, pattern matching (vowels as 0, consonants as 1), and palindromes.
- **Array Optimization:** Max profit (Buy/Sell Stock), Two Sum (HashMaps), and Sliding Windows.
- **Matrix Simulation:** 2D array traversal (like Spiral Matrix or Tetris-style logic).
- **Efficiency:** Optimizing $O(n^2)$ to $O(n \log n)$ or $O(n)$ using Binary Search or Frequency Maps.

---------------------------------------------------------------

## 2. Frontend Performance & SEO (The "Japan Team" Round)
- **Core Web Vitals:** Measuring and improving LCP, CLS, and FID/INP.
- **Critical Rendering Path:** The sequence from HTML/CSS to pixels (DOM → CSSOM → Render Tree → Layout → Paint).
- **Rendering Paradigms:** Use cases for CSR (Client), SSR (Server), SSG (Static), and ISR (Incremental).
- **SEO Strategies:** Improving crawlability, meta-tags, and performance impact on search rankings.
- **Performance Bottlenecks:** Handling "Heavy Data" (rendering 10,000+ items) without freezing the UI.

---------------------------------------------------------------

## 3. JavaScript & React Deep-Dive (Technical Screen)
- **JS Internals:** Event Loop (Microtasks vs. Macrotasks), Closures, and Prototypal Inheritance.
- **React Optimization:** React.memo, useMemo, and useCallback (The "when" and "why").
- **State Management:** Differences between Context API vs. Redux/Zustand.
- **Browser APIs:** Differences between Cookies, LocalStorage, and SessionStorage.
- **Utilities:** Implementing Debounce and Throttle from scratch.

---------------------------------------------------------------

## 4. System Architecture & Quality (The "Senior" Round)
- **Framework Migration:** Strategies for migrating large apps (Feature Flags, Branch Syncing, Compatibility).
- **Security:** SSL Pinning, preventing XSS/CSRF, and handling sensitive data without storage.
- **Quality Assurance:** Unit Testing (Jest/RTL), Code Reviews, and preventing production regressions.
- **API Design:** Handling "Divergence" between frontend and backend during long-term projects.

---------------------------------------------------------------

## 5. Leadership & Culture (The "MD/Hiring Manager" Round)
- **Stakeholder Management:** Communicating timelines, resource management, and setting expectations.
- **Conflict Resolution:** Handling disagreements with peers or managers using the STAR method.
- **AI Productivity:** Using GitHub Copilot and AI agents to speed up development.
- **Motivation (The "Why"):** Your interest in moving to Tokyo and the "PayPay 5 Senses."
- **Problem Solving:** Stepping in during a crisis (e.g., an SEO migration fail or production outage).

---------------------------------------------------------------