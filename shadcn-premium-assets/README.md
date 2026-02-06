# Shadcn Premium Asset Store

All components have been successfully downloaded.

## 📂 Directory Structure
The assets are organized by category and block name:
- `shadcn-premium-assets/`
  - `<category>/` (e.g., `hero-section`, `bento-grid`)
    - `<block-name>/` (e.g., `hero-section-01`)
      - `page.tsx`
      - `header.tsx`
      - `hero-section-01.tsx`
      - etc.

## 🛠 Usage Instructions

### 1. Prerequisites
Ensure you have the standard Shadcn UI base components installed in your project:
```bash
npx shadcn@latest add button card input textarea label badge avatar
npx shadcn@latest add dropdown-menu select checkbox radio-group switch
npx shadcn@latest add dialog sheet popover tooltip hover-card
npx shadcn@latest add tabs accordion collapsible separator scroll-area
npx shadcn@latest add table form toast sonner command
```

### 2. External Dependencies
Most blocks use these common libraries:
```bash
npm install lucide-react motion class-variance-authority clsx tailwind-merge
```

### 3. Copying Components
1. Choose a block from the `shadcn-premium-assets` folder.
2. Copy the `.tsx` files into your project's component directory (e.g., `src/components/shadcn-studio/...`).
3. Update the `import` paths in the files to match your project structure (especially for `@/components/ui/...` and `@/lib/utils`).

### 4. Configuration
Ensure your `components.json` includes the Shadcn Studio registries if you plan to use `npx shadcn add` directly in the future:
```json
"registries": {
  "@ss-components": {
    "url": "https://shadcnstudio.com/r/components/{name}.json",
    "params": {
      "email": "sjbedecki@gmail.com",
      "license_key": "7679F4ED-A628-4DFA-B99C-DA4A2DE2F946"
    }
  },
  ...
}
```

## ✅ Status
- Total Categories: 50
- Content: Full `.tsx` source code for all components.
- Status: **Complete**
