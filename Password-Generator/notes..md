# 1. useEffect (The Side Effect Manager)
What it does: It allows you to run code after your component has rendered. React components are supposed to be pure (just returning UI based on props and state), but sometimes you need to step outside of that to do things like fetching data from an API, setting up subscriptions, or manually changing the DOM. These are called "side effects."
# 2. useRef (The Mutable Box & DOM Accessor)
What it does: It provides a way to persist values between renders without causing the component to re-render when that value changes (unlike useState). It is also the standard way to grab direct access to an HTML element in the DOM.

How it works: It returns an object with a single property: .current. You can read or write to myRef.current at any time.
# 3. useCallback (The Function Memoizer)
What it does: It caches (memoizes) a function definition between renders. In React, every time a component re-renders, all the functions inside it are recreated. Usually, this is fine, but if you are passing a function down as a prop to a highly optimized child component, recreating the function will cause the child to re-render unnecessarily.

How it works: Like useEffect, it takes a function and a dependency array. It will only recreate the function if one of the dependencies changes.