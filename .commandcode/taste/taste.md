# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# playwright
- For this project, do not add `--headed` flag when running tests; the project already has `headless: false` configured in playwright.config.ts. Confidence: 0.75
- Use dotenv and `process.env` variables for credentials instead of hardcoding them (user refactored session storage to load EMAIL/PASSWORD from `.env`). Confidence: 0.60

# workflow
- Prefer explaining proposed changes to the user rather than directly editing files (user said "no Just explain the updates"). Confidence: 0.60

