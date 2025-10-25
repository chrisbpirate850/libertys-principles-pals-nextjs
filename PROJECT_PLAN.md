# Liberty's Principles Pals - Public Site Project Plan

## 🎯 Project Vision

Transform the Liberty's Principles Pals series into an interactive digital library that:
- Builds anticipation and interest for the book series
- Provides SEO-optimized content about civics education
- Creates a community around teaching freedom's principles
- Enables future monetization through digital book access
- Showcases progress and builds social proof

---

## 📂 Project Structure

### Two Separate Applications

**1. Admin/Review App** (`C:\Users\cjbra\the-art-of-citizenship-app`)
- Port: 3002
- Purpose: Internal tool for image generation and review
- Features:
  - AI image generation with Gemini API
  - 4 variations per spread + custom upload slot
  - Review interface at `/review-v2`
  - Approval system
  - Character reference management
- Status: ✅ Fully functional

**2. Public Website** (`C:\Users\cjbra\libertys-principles-pals-nextjs`)
- Port: 3003
- Purpose: Public-facing marketing and reading platform
- Deployment: Netlify
- Features: See below
- Status: 🚧 Built, needs deployment troubleshooting

---

## 🌐 Public Site Structure

### Current Pages (Phase 1 - ✅ COMPLETE)

#### Landing Page (`/`)
**Purpose:** SEO-optimized entry point, builds excitement
**Content:**
- Hero section with project overview
- Two CTA buttons:
  - "Explore the Library" → /library
  - "View 28 Principles" → scrolls to #principles
- About section explaining the series
- Sample books showcase (6 books)
- Character introductions (7 characters)
- **CRITICAL SEO:** All 28 founding principles with full descriptions
  - Based on "The 5000 Year Leap"
  - Historical context
  - Founding Father quotes
  - Reflection questions
- Footer with copyright and author info

#### Library/Bookshelf (`/library`)
**Purpose:** Visual book browser with "coming soon" sections
**Content:**
- **Freedom Garden Series** (Ages 4-8)
  - All 27 books displayed in grid
  - Gradient backgrounds (Navy/Purple/Gold theme)
  - Clickable cards linking to reader
  - Book number placeholders (covers coming later)
  - Shows page count
- **Coming Soon Sections:**
  - Board Books (Ages 0-3) - "Liberty's Little Learners" (TBD)
  - Chapter Books (Ages 8-12) - "Freedom Garden Chronicles" (TBD)

#### Book Reader (`/book/[bookNumber]`)
**Purpose:** Full reading experience
**Content:**
- Preface (if available)
- Story pages:
  - Left side: Illustration
  - Right side: Story text
  - Page counter
- Activity page (if available)
- Epilogue for parents & educators
- Navigation controls (Previous/Next)
- "Back to Library" link

**Currently Available Books with Illustrations:**
- Book 1: Natural Law (14 pages)
- Book 2: Virtue (some pages)
- Book 6: Equality (some pages)
- Book 8: Property Rights (some pages)
- Book 9: Divine Law (15 pages - IN PROGRESS)

---

## 📊 Content Status

### Books 1-8
- ✅ Full illustration prompts in `illustration-data.json`
- ✅ Story text in `books-data.json`
- ⏳ Images partially generated (Books 1, 6, 8 complete)

### Book 9
- ✅ Illustration prompts added to `illustration-data.json`
- ✅ All 15 spreads generated (60 variations in `review-images-v2/`)
- ⏳ Awaiting approval in review interface

### Book 10
- ✅ Data available in `books-detailed-specs-9-18.json`
- ⏳ Needs conversion to standard format
- ⏳ Ready to generate images

### Books 11-18
- ⏳ Data will be provided one at a time by user
- ⏳ Need conversion from different format

### Books 19-27
- ✅ Story text exists in `books-data.json`
- ❌ No illustration prompts yet

### Book 28
- ℹ️ Preview/sample book - status unknown

---

## 🎨 Design System

### Color Palette
- **Navy Blue**: `#1e3a5f` (primary)
- **Twilight Purple**: `#8b5cf6` (accent)
- **Plum**: `#a855f7` (secondary)
- **Warm Gold**: `#d4a574` (highlights/CTAs)

### Typography
- **Headings**: Playfair Display (Google Font)
- **Body**: Nunito (Google Font)

### UI Components
- Tailwind CSS 4.0 (configured)
- shadcn/ui components available
- Radix UI primitives installed

---

## 🚀 Deployment Plan

### Platform: Netlify

**Current Configuration:**
- File: `netlify.toml` (exists)
- Build Command: `npm run build`
- Publish Directory: `out` (static export)
- Next.js Config: Static export enabled

**Deployment Checklist:**
- [ ] Fix deployment errors
- [ ] Verify build works locally (`npm run build`)
- [ ] Test static export
- [ ] Deploy to Netlify
- [ ] Configure custom domain (if available)
- [ ] Set up SSL certificate
- [ ] Configure environment variables (if needed)

**Post-Deployment:**
- [ ] Test all routes
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics (optional)

---

## 📅 Roadmap

### Phase 1: Foundation ✅ COMPLETE
- [x] Landing page with SEO content
- [x] Library/bookshelf view
- [x] Book reader functionality
- [x] Copy data from admin app
- [x] Basic navigation

### Phase 2: Content Completion 🚧 IN PROGRESS
- [ ] Complete Book 9 image approvals
- [ ] Generate images for Book 10
- [ ] Process Books 11-18 (one at a time)
- [ ] Add book covers to `public/covers/`
- [ ] Create hero image for landing page

### Phase 3: Blog & Community 📋 PLANNED
- [ ] Set up `/blog` route with MDX support
- [ ] Create initial blog posts:
  - "Introducing Liberty's Principles Pals"
  - "Behind the Scenes: AI-Assisted Illustration"
  - "Teaching Civics to Young Children"
  - "The 5000 Year Leap for Kids"
- [ ] Add email signup form (Mailchimp/ConvertKit)
- [ ] Social media share buttons
- [ ] Comment system (Disqus or similar)

### Phase 4: Marketing & Growth 📋 PLANNED
- [ ] Create social media content calendar
- [ ] Screen record admin workflow for social proof
- [ ] Create video trailers for each book
- [ ] Partner with homeschool influencers
- [ ] Submit to homeschool curriculum directories
- [ ] Create teacher/parent resource PDFs
- [ ] Launch email newsletter

### Phase 5: Monetization 💰 FUTURE
- [ ] Member login system (Auth0 or Clerk)
- [ ] Payment integration (Stripe)
- [ ] Subscription tiers:
  - Free: Landing page, sample chapters
  - Basic: Full digital library access
  - Premium: Printable PDFs, worksheets, resources
- [ ] Access control for premium content
- [ ] Member dashboard

### Phase 6: Advanced Features 🔮 FUTURE
- [ ] Book customization (add child's name)
- [ ] Read-aloud audio narration
- [ ] Interactive activities/quizzes
- [ ] Progress tracking for educators
- [ ] Classroom management tools
- [ ] Print-on-demand physical books

---

## 🎯 Marketing Strategy

### Scarcity Marketing
**Staged Release Approach:**
- Release books 1-3 immediately upon launch
- Release 1 new book every 2 weeks
- Build anticipation with "coming soon" countdown
- Email subscribers about new releases
- Social media announcements

### Content Marketing
**Behind-the-Scenes:**
- Screen recordings of admin workflow
- "How it's made" blog posts
- Character design process
- AI collaboration stories

**Educational Content:**
- Teaching civics at home guides
- Conversation starters for parents
- Historical facts about founding principles
- Modern application examples

### Target Audiences
1. **Homeschool families** (primary)
2. **Christian/conservative educators**
3. **Parents concerned about civics education**
4. **Elementary school teachers**
5. **Grandparents** (gift buyers)
6. **Patriotic organizations**

---

## 🔧 Technical Notes

### Data Flow
1. **Content Creation** → Admin app
2. **Image Generation** → Gemini API
3. **Review & Approval** → Admin interface
4. **Data Export** → Copy to public site
5. **Display** → Public website

### File Synchronization
When new books are completed in admin app:
```bash
# Copy book data
cp admin-app/books-data.json public-site/src/data/

# Copy approved illustrations
cp -r admin-app/public/illustrations/* public-site/public/illustrations/

# Copy covers (when created)
cp admin-app/public/covers/* public-site/public/covers/
```

### Environment Variables
**Admin App (.env.local):**
```
GEMINI_API_KEY=your_key_here
```

**Public Site:**
- None currently needed
- Future: Analytics, payment processor keys

---

## 📝 Outstanding Questions

### Branding Decisions Needed:
1. **Board Books Series Name** - Current: TBD
   - Suggestion: "Liberty's Little Learners"
2. **Chapter Books Series Name** - Current: TBD
   - Suggestion: "Freedom Garden Chronicles"
3. **Hero Image** - Needs design/creation
4. **Book Cover Template** - Standardized design needed

### Content Decisions:
1. **Blog Platform** - Use Next.js MDX or external (Medium, Substack)?
2. **Email Service** - Mailchimp, ConvertKit, or Beehiiv?
3. **Social Media Focus** - Facebook, Instagram, Pinterest, or all?

---

## 🆘 Current Issue: Deployment Troubleshooting

**Status:** Built locally, needs Netlify deployment fix

**Next Steps:**
1. Run `npm run build` to test local build
2. Identify any build errors
3. Fix configuration issues
4. Deploy to Netlify
5. Verify production site

---

## 📞 Key Links

- **Local Development:**
  - Admin: http://localhost:3002
  - Public: http://localhost:3003

- **Production (Future):**
  - Website: libertysprinciplespals.com (or TBD)
  - Netlify Dashboard: [To be configured]

- **Resources:**
  - GitHub Repo: [If applicable]
  - Figma Designs: [If applicable]
  - Google Drive: [If applicable]

---

## 📈 Success Metrics

### Launch Goals (Month 1):
- [ ] 1,000 unique visitors
- [ ] 100 email subscribers
- [ ] 50+ book reads (any book)
- [ ] 10+ shares on social media

### Growth Goals (Month 3):
- [ ] 5,000 unique visitors
- [ ] 500 email subscribers
- [ ] 500+ book reads
- [ ] Partnership with 2+ homeschool influencers

### Revenue Goals (Month 6):
- [ ] First 10 paid subscribers
- [ ] $500 MRR (Monthly Recurring Revenue)
- [ ] 5-star reviews from parents/educators

---

**Last Updated:** 2025-10-24
**Project Status:** Phase 1 Complete, Deployment in Progress
**Next Milestone:** Deploy to Netlify, complete Book 9 approvals
