# Decision log

Your methods section. About one page total.

Answer these as you go, not the night before it is due.
Specifics beat polish - a short honest answer is worth more than a long vague one.

Delete these instructions when you are done, or leave them. It does not matter.

---

## 1. What did you set out to build, and what changed?

What you wanted at the start, and what is actually live now.
Name one thing you dropped or added along the way, and why.

*Your answer here.*

- Before development, I wanted to portfolio website that is formatted based on the Steam community profile as I find it simple and pleasant to use, with the goal of appealing to other gamers and hiring teams. The main feature that attracted me was the automatically updating recently played games which I adapted to pull my three most recent GitHub projects
    
- What is live now is a completed portfolio using a Steam profile template with extra content boxes for badges and achievements removed. I adapted the sidebar to contain an About page, Skills page, and links to my GitHub and resume. The friends content box is adapted to be a Contact Information section containing links to my e-mails, LinkedIn, and general location.

- The main thing I dropped during development are the content boxes containing achievements and badges as I wasn't sure how to adapt them into my design without bloating the page with unnecessary content. I also dropped the Contact Information page as there was not enough content to justify having its own page so I included this section on the main page in a small content box.

---

## 2. A fork in the road

Name one real choice where you could have gone two ways.
Plain HTML or a framework. One page or several. Your own CSS or someone's template.
What goes on the front page and what does not.

Say which you picked, what the alternative was, and what you gave up by not taking it.

"There was no alternative" is not an answer. Find the fork.

*Your answer here.*

- The first fork was in developing the recent projects section and picking the approach to automatically update projects with the most recent. I chose a simple fetch and update by calling the GitHub API when opening the site. An alternative was a scheduled GitHub Actions workflow that periodically calls the GitHub API and commits the result as a static HTML/JSON file. The benefit to this would be avoiding depending on the GitHub API being reachable but this would add unnecessary toolchain complexity for a project of this scale. Another alternative was editing the recent project cards by hand though this would require constant updates to the code which is redundant.

- Another fork was in my last design choice which was adding in my favorite games recently in the about page. The two options were hotlinking from Steam or committing the game images locally. I chose to hotlink from Steam as it would automatically update when game images are updated. With this, I give up self-containment as this feature depends on the Steam CDN being available. Another downside is that this feature would not work offline or on a network that blocks Steam, leaving the content box empty.

---

## 3. Where you overruled the agent

One time Claude suggested, wrote, or claimed something and you did not take it.

What did it do? How did you notice? What did you do instead?

If it genuinely never happened, say so plainly, and then say what you would have had to
check in order to notice. Being honest here costs you far less than a story you cannot
defend when you record your video.

*Your answer here.*

- The only times I overruled the agent was in minor design choices such as color scheme as well content box placement and sizing. Well-detailed prompts prevented the agent from hallucinating and adding unwanted features and content. I likely would have had to implement the GitHub Actions workflow alternative mentioned above where the agent would have more room to hallucinate due to the added complexity.

---

## 4. How you know it works

What check did you run, and what did it tell you?

Then the real question: **what would have made this check fail?**
A check that could not have failed is not a check.

Link to your `verification/` folder.

*Your answer here.*

- I ran two simple checks. The first is fetching the live URL and obtaining a 200 response stored in /verification/fetch.txt. The second check is a screenshot of the rendered page in a browser with the URL visible.
- fetch.txt showed the 200 response and the HTML file matching my current code. The screenshot shows that the page rendered correctly and at the correct URL.
- One thing that could have made this check fail is fetching the site immediately after pushing changes so the site rendered incorrectly until GitHub Pages finished deploying.
- Path to verification: [eluu02.github.io/verification/](verification/)

---

## 5. What is still wrong

One thing on your own site that is not right, not finished, or that you do not
fully understand.

What would you do next, and how would you find out?

*Your answer here.*

- The main issue is that the site is unpolished. The design is simple so no major changes are needed but the lists in the Skills page and paragraphs in About page need cleaning up.
- The next steps would be the polish the design to make the site more aesthetically pleasing as well as cleaning up the About and Skill pages. Then, I would like to add additional details such my social platforms and content boxes with automatically updated stats, photos, etc.
