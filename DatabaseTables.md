## Identifying Database Tables:
Initially Start the project based on this table. In future we will update the table  (if required)

---
- 1. User
- 2. Admin
- 3. Doctor
- 4. Patient
- 5. Schedule 
- 6. Doctor Schedule
- 7. Appointment
- 8. Medical Report
- 9. Patient Health Data
- 10. Prescription
- 11. Payment
- 12. Review
- 13. Specialities
- 14. Doctor Specialities



## Routes:

**Base Url:** `http://localhost:4001/api/v1`

---

✅ **Admin:**

- ⬇ get: http://localhost:4001/api/v1/admin 
- ⬇ get: http://localhost:4001/api/v1/admin/:id
- ⬇ get: http://localhost:4001/api/v1/admin?="admin1"
- ⬆ post: http://localhost:4001/api/v1/user"
- ↻ update: http://localhost:4001/api/v1/admin/:id
- ✄ delete: http://localhost:4001/api/v1/admin/:id

---
**user**
- app.use('/api/v1/user',userRoutes)
    - http://localhost:4001/api/v1/user

**admin:**
- Create Admin: 
    - post: [ http://localhost:4001/api/v1/user ]
    -   `router.post("/", userController.createAdmin);` => user as admin 
- Get All Admin: 
    - get: [http://localhost:4001/api/v1/admin]

    - `router.get('/',adminCotroller.getAdmins)` => get all the admin lists.
    - implement search fuctionality get: [http://localhost:4001/api/v1/admin?=admin1]