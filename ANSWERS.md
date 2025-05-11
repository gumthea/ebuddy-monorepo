
# Technical Test Answers – [Hendra Cahyana]

## Part 4: Bonus Firebase Technical Questions

### 1. **Firestore Query to Determine Most Potential User**

To retrieve the most potential user based on multiple factors (Total Average Weight Ratings, Number of Rents, and Recent Activity), we need to construct a Firestore query that takes all these factors into account. However, Firestore sorts documents hierarchically, meaning it only supports compound queries in a sequential order rather than considering all fields together as a single "ranking score."

To achieve this, we would first create a composite score that incorporates all three fields. Here's an approach:

1. **Precompute a composite score** based on the weights of the factors (e.g., Total Average Weight Ratings, Number of Rents, Recently Active).
2. **Store this score** in the document and query based on it.

The query will look like this:

```javascript
db.collection("USERS")
  .orderBy("compositeScore", "desc")
  .limit(10);
```

### Composite Score Calculation

We can use a formula like:

```
compositeScore = (totalAverageWeightRatings * weight1) + (numberOfRents * weight2) + ((currentTime - recentlyActive) / 1000 * weight3)
```

Where:
- `weight1`, `weight2`, and `weight3` are predefined constants that can be adjusted based on the relative importance of each factor.
- `recentlyActive` is normalized to the current time to prioritize more recent activity.

By storing this composite score in the Firestore document, we can order the users efficiently in one query.

### 2. **Ensuring User’s Online/Offline Status and Recently Active Field Remains Updated**

To keep a user's "recentlyActive" field up-to-date, we can use Firebase Realtime Database or Firestore with Firestore triggers (Cloud Functions) to listen to changes in the user's activity status.

**Approach**:
- Whenever the user performs an activity (e.g., login, messaging, or interacting with the app), we update the `recentlyActive` field with the current timestamp.
- We can use Firestore triggers to monitor changes in specific fields or states to update the "recentlyActive" field.

For maintaining real-time online/offline status, we can:
- Use Firebase's `onDisconnect` functionality to mark the user as offline when they disconnect or close the app.
- Update the "online" status in a dedicated field within the user’s document, where we set it to `true` when active and `false` when the user is idle or offline.

This ensures that both the "recentlyActive" and "online" statuses are always fresh and accurately reflect the user's activity in real-time.

---

## Part 5: Personality & Technical Questions

### 1. **Reddit Settings Page: Client-Side vs. Server-Side Components**  
Without directly inspecting the code, we can assume that the UI components related to user preferences and layout settings, such as theme selection or layout configuration, are client-side components. These settings likely interact with the local client-side state or cookies, as they do not require server-side rendering. To verify, we could inspect network activity in developer tools to see if API requests are made to fetch or update these settings.

### 2. **Difficult Technical Problem Encountered**  
One of the most difficult technical challenges I faced was optimizing a large-scale search functionality for a real-time data dashboard that involved filtering and sorting millions of records on the fly. The challenge was balancing performance and accuracy while maintaining a smooth user experience. To fix this, I implemented server-side pagination, utilized Elasticsearch for indexing, and cached results for repeated queries to reduce load times significantly.

### 3. **Typical Approach to a Project**  
When approaching a project, I begin by understanding the requirements and constraints. I then break the project down into manageable tasks and prioritize them based on dependencies. I follow an iterative approach, frequently testing and reviewing progress to ensure the solution meets both functional and non-functional requirements. I also make sure to write clean, maintainable code and ensure proper documentation at each step.

### 4. **Approach to Learning a New Topic**  
To absorb as much as possible, I start by exploring foundational resources (documentation, books, and tutorials) to build a strong theoretical understanding. I then apply that knowledge through hands-on projects or small tasks to reinforce learning. I also seek out discussions in online communities, attend meetups or webinars, and experiment with the topic through real-world challenges.

### 5. **Consistency vs. Fast & Efficient**  
I value consistency because it ensures long-term maintainability, reliability, and quality. However, I recognize that in some cases, being fast and efficient is necessary to meet tight deadlines. My approach is to balance both by building a consistent foundation and optimizing processes to improve efficiency without compromising quality.

### 6. **Do you own any Apple products?**  
No, I do not own any Apple products.

### 7. **Immediate Availability to Start the Job**  
I am available to start immediately or with a short notice period, depending on the company’s needs. I’m excited to join the team and contribute my skills as soon as possible.
