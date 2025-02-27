# steps for sass

- run `npm add -D sass`
- add functions.scss to src folder
- `@use "./functions.scss" as f;` needs to be added to all files to use function
- then font-size: `f.rem(32px)` can be used to convert automatically to rem