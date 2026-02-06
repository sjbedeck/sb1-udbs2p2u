# Shadcn Studio Assets

This folder contains a collection of Shadcn UI blocks and template metadata that you can use in your projects without needing an active MCP connection.

## 📂 Directory Structure

- **`free-blocks/`**: Contains 50+ free, open-source React components (blocks) compatible with Shadcn UI.
- **`templates-metadata/`**: Contains metadata and links for hundreds of Shadcn templates (both free and premium).

## 🚀 How to Use Free Blocks

The files in `free-blocks` are standard React components using Tailwind CSS and Radix UI primitives (via Shadcn UI).

### Prerequisites
Ensure your project is set up with Shadcn UI:
```bash
npx shadcn-ui@latest init
```

### Installation Steps
1. **Choose a Block**: Browse the `free-blocks` directory. Filenames indicate the type (e.g., `hero1.tsx`, `pricing2.tsx`, `navbar1.tsx`).
2. **Copy the Code**: Open the desired `.tsx` file and copy its content.
3. **Paste & Adapt**:
   - Create a new file in your project (e.g., `components/blocks/Hero.tsx`).
   - Paste the code.
   - **Fix Imports**: The blocks may expect certain UI components (like `Button`, `Badge`) to be present in `@/components/ui`.
     - If you see an import error like `import { Button } from "@/components/ui/button"`, execute:
       ```bash
       npx shadcn-ui@latest add button
       ```
   - **Fix Icons**: Most blocks use `lucide-react`. Ensure it's installed:
     ```bash
     npm install lucide-react
     ```

### When to Use Blocks
- **Hero Sections**: Use `hero*.tsx` for the top section of your landing page to grab attention.
- **Features**: Use `feature*.tsx` to list product capabilities.
- **Pricing**: Use `pricing*.tsx` for subscription tables.
- **Testimonials**: Use `testimonial*.tsx` for social proof.
- **Footers/Navbars**: Use `footer*.tsx` and `navbar*.tsx` for standardized layout elements.

## 🔍 Exploring Templates

The `templates-metadata` folder contains Markdown files describing various templates.

1. Open a file (e.g., `shadcnblocks-shadcn-blocks.md`).
2. Look for the `demoUrl` or `githubUrl` (if available) to preview or download the full template.
3. **Note**: "Premium" templates listed here usually require purchase and are not included in this download.

## ⚠️ Premium Content Note

The original request asked to download "all premium" templates. Due to security restrictions (missing API keys for the `shadcn-studio` Pro/Premium MCP server), **only open-source/free assets could be retrieved**.

If you have a valid Shadcn Studio API key:
1. Configure it in your environment variables (`SHADCN_STUDIO_API_KEY`).
2. Restart the agent system to enable the `shadcn-studio` MCP server.
3. The agent can then attempt to fetch premium content.
