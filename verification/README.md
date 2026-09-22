URL checked: https://eluu02.github.io/
When: 2026-09-22 00:31
What would have made this fail: 
    - One issue is fetching immediately after pushing
    which would fail due to fetching the old page or a 404 instead of the updated page. I ran into this issue several times throughout development
    by trying to fetch the page before GitHub pages fully
    deployed the site.
    - Another issue that would have made this fail is having my About and Skills page in a subfolder which
    I had accidentally created at the start of development, causing a 404 response. 
