# Seavey

Seavey is a self-hosted idea development suite. It omits many features from general-purpose word processors such as autocorrect, rich text, etc. The only rich text supported with Seavey is through Textile (WIP), and that feature is purely opt-in.

To save your work, Seavey offers a button to download a plain text file (WIP) or to download a .html file if you are using Textile. 

You can also temporarily save through Seaveys integrated and minimal version control system. This system has only two features: append and revisit. Append will store all of your current session's data in localStorage, and revisit will take that data out of localStorage and load it into the text fields.

I designed it this way because the last thing you want to do is click an upload button and navigate to your last file (likely named something similar to "sanma_rough_draft_1"). This system allows you to simply click a button and revisit everything from your last session. A major downside with this system, however, is the lack of multi-project support; it was only ever meant for one project. Therefore, the best practice is to use the append/revisit system to get from first draft to final draft, and then download the file into plain text or HTML.

The CLI for Seavey is still a work in progress, so for now just get the code with git clone and then run `serve -l xxxx` to host your own version of Seavey.

Seavey is designed to be modular, so go ahead pop open the source code and add some HTML buttons and JavaScript functions.

The stylesheet provided is extremely minimal: I only changed the background color and fonts. Feel free to edit the stylesheet in your clone, or even fork this project and make a more styled version of Seavey. If you do the latter, just know that your fork won't be merged because it defeats the purpose of Seavey to be a minimal suite when you add gradients and animations.

Enjoy, and if you haver any questions or suggestions shoot me an email at reeceturner1358@gmail.com.
