- Don't add code comments.
- Don't add code comments.
- Don't add code comments.
- File naming conventions should follow <name>.<module>.<extension>.
- The /backend directory is for backend code only.
- Make sure to follow express best practices when writing server code.
- Make sure to follow NextJs best practices when writing frontend code.
- We server the frontend (NextJs) from the express app in production.


**Product Description:**  
*The Handy App* is an on-demand platform connecting users in Dublin with verified, insured handymen for home services like plumbing, electrical work, and general repairs. It offers a transparent, secure, and user-friendly experience—from booking and negotiating to payment and review—with built-in trust and safety features.

---

**User (Client) Flow:**  
1. **Sign up / Log in** (email, Google, or phone).  
2. **Submit a service request**: choose service type, add location (auto-detected or manual), describe the issue, and optionally attach photos.  
3. **Select a handyman**: from past hires or a smart-recommended list (based on proximity and service match).  
4. **Negotiate terms**: receive a cost estimate, review handyman’s adjusted quote and comments, and propose a time slot.  
5. **Confirm & pay**: approve final quote and time → payment is processed and held in escrow.  
6. **Service completion**: handyman uploads before/after photos and marks job complete.  
7. **Review window**: user has 30 minutes to object; if no objection, funds are released (minus 10% platform fee).  
8. **Leave a review**: rate and comment on the handyman’s service.

---

**Handyman Flow:**  
1. **Register & verify**: sign up, select service categories, define coverage area, upload verification documents (e.g., insurance, license), and pay a €2/month subscription.  
2. **Set up profile**: add portfolio photos, pricing model (hourly/fixed), and availability.  
3. **Receive job alerts**: get real-time push notifications for matching service requests.  
4. **Negotiate**: accept/reject request, adjust price with comments, and propose/confirm time slots.  
5. **Complete job**: upload before/after photos and mark job as done.  
6. **Get paid**: 90% of payment released after 30-minute user approval window.  
7. **Receive reviews**: view user feedback and maintain reputation.

---

**Key Features:**  
- **Smart matching**: proximity + service-type based recommendations  
- **Transparent pricing & negotiation**: user proposes time, handyman adjusts price  
- **In-app secure payments**: Stripe integration with 30-minute escrow hold  
- **Photo evidence**: before/after uploads for job verification  
- **Verified profiles**: insurance/license badges after document review  
- **Dual rating system**: users and handymen rate each other  
- **Real-time chat & notifications**: FCM + in-app messaging  
- **Complaint handling**: via chatbot or email with admin oversight  
- **Strict anti-off-app policy**: enforced via admin monitoring  
- **Admin dashboard**: manage users, handymen, disputes, service categories, and KPIs  
- **Web + mobile (iOS/Android)**: hybrid app with SEO-optimized web version  

All designed to build trust, ensure transparency, and streamline home service bookings in Dublin.
