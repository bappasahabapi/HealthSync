🔲 run code: 
- first make an `env` file and paste the code from `.env.local`
- npm install
- npm run dev

---

### 🩺 🏥 HealthSync:
TypeScript,NodeJS, Express, Prisma, WEB RTC (via Agora.io), and PostgreSQL

🚑 Smart Health Management System | Patient–Doctor Communication Platform


---



**Web Application Requirements**

**HealthSync** is a robust and comprehensive HealthSync management system designed
to streamline communication and appointment processes between patients, doctors,
and administrators. The system incorporates cutting-edge technologies such as
`NodeJS, Express, Prisma, WEB RTC (via Agora.io), and PostgreSQL `for efficient and
secure data management

### 1. **Technologies**
---
- `NodeJS and Express:` Used for server-side application development.
- `WEB RTC (Agora.io):` Third-party service for real-time communication between
doctors and patients.
- `Prisma:` ORM (Object-Relational Mapping) tool for database management.
- `PostgreSQL:` Database management system.
- `Nextjs:` A React Framework for building applications.


### 2. User Roles and Functionalities
---
**2.1 Admin**
-  `Account Management`
    - Create and manage doctor accounts.
- `Appointment Management`
    - Create schedule slots
    - Manage doctor appointment slots (Change status of appointment).
- `Access to Information`
    - View appointment history and details.
    - Access and manage doctor profiles.
    - View metadata

**2.2 Doctor**
- `Appointment Management`
    - View upcoming appointments.
    - Set appointment slots
    - Take appointments.
- `Patient Profile`
    - Access patient profiles and medical history
    - View uploaded diagnostic test reports of patients.
    - View previous prescriptions (if any).
- `Prescription Management`
    - Generate prescriptions for patients during and after consultations.
    - Send prescriptions to patients through email by using the system.
    - Attach additional medical notes and instructions to prescriptions.

**2.3 Patient**
- **Account Management**
    - Register a new account during the first visit.
    - Leverage features for password recovery and account security.
- **Appointment Booking**
    - Schedule appointments with available time slots.
    - Book appointments with specific doctors.
- **Medical Record Management**
    - Manage personal profile data.
    - Maintain medical history.
    - Upload diagnostic test reports.
- **Prescription Access**
    - Access and view prescriptions.
    - Receive prescriptions through the platform.
    - Additionally, prescriptions are emailed to the patient for easy access and
reference.
- **Payment and Confirmation**
    - Pay consultation fees when booking appointments.
    - Receive an email confirmation with an invoice after successful payment.
    - Appointments are confirmed only after payment.
    - If payment is not made within 30 minutes of booking, the booking will be
automatically canceled.
- **Reviews**
    - Provide reviews with ratings for consulting doctors.
    - Include a comment section for additional feedback.
    - View and manage previously submitted reviews.

### 3. System Features
- Real-time communication through WEB RTC.
- Secure user authentication and authorization.
- Seamless appointment scheduling and management.
- Comprehensive patient profiles and medical records.
- Seamless integration for patients to pay consultation fees securely.
- Automated email notifications for appointment confirmations, invoices, and
prescription delivery.
- Doctors can generate detailed prescriptions during and after consultations.
### 4. Single-Page Application (SSR)
- Landing Page: Provides information about the PH HealthCare system.
- Doctor Profile: Displays detailed information about doctors.


## Working Branch

- Step by step execution Documention [Documentation.md](https://github.com/bappasahabapi/HealthSync/blob/main/Documentation.md)
🍟 main
- merge every branch
---
- 🍟 hs-01/project-initiation-analysis
    - Setup project , npm packages, **prisma** , database connection, create user as admin (MVC) and **hash password**

- 🍟 hs-02/user-admin
- 🍟 hs-03/password-hashing

---
- 🍟 hs-p1
    - All about seaching, filtering sorting pagination of admin section
- 🍟 hs-p2/admin-functionality
    - 
- 🍟 hs-p3/admin-token
- 🍟 hs-p3.5/auth-login-access-refress-token
    



@ 