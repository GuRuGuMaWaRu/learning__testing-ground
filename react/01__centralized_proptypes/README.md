I prefer centralizing PropTypes in `/types/index.js.`

Benefits:

1.  The centralized PropType radically simplifies the component’s PropType declaration. Line 13 just references the centralized PropType, so it’s easy to read.
2.  The centralized type only declares the shape, so you can still mark the prop as required as needed.
3.  No more copy/paste. If the object shape changes later, you have a single place to update.

_Edit_: You can convert JSON into PropTypes using transform.now.sh.

Summary

1.  Declare your PropTypes as explicitly as possible, so you know when you’ve made a mistake.
2.  Centralize your PropTypes to avoid repeating yourself.
3.  If you’re working in a strongly typed language on the server, consider generating your PropTypes by reading your server-side code. This assures your PropTypes match your server-side types.
