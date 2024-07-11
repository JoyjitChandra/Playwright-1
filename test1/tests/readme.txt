1. How to resolve conditional elements which are not yet present in the dom?
- We could use page.$('') to check if an element exists in the DOM?
  The method finds an element matching the specified selector in the ElementHandle's subtree. 
  If no elements match the selector, returns null.
  or we could check for the API response. 

  Though probably the solution is not that simple. I am really curious know the actual solution for this scenario.
  
2. How to print value in browser console?
 -The page.evaluate() API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment.
   Browser globals like window and document can be used in evaluate.

3. Best practice to handle waiting? - check response.
-  page.waitForResponse() Returns the matched response.
    Can use proper url to get specific response.
    Can use multiple predicates.