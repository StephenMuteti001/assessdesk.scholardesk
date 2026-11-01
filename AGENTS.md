<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- AssessDesk pages live in src/pages and are mounted by thin route files in src/routes that set head() via seoHead(); keeps page bodies portable and metadata server-rendered.
- Pricing and hotkey data live only in src/config/assessdesk.ts; every page reads from it so plans and shortcuts never drift.
