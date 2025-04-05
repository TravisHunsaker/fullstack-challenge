## Getting Started

In both the frontend and server run

```bash
npm i
npm run dev
```

To seed the database, I installed the SQLite extension in VS Code. Open the extension, right-click the database, and select "New Query". A new SQL file will open.

Here is the data you'll need:

```bash
INSERT INTO organizations (name) VALUES ('Utah State');
INSERT INTO organizations (name) VALUES ('BYU');

-- Accounts for Utah State (Org ID: 1)
INSERT INTO accounts (name, organization_id) VALUES ('Amazon', 1);
INSERT INTO accounts (name, organization_id) VALUES ('Netflix', 1);
INSERT INTO accounts (name, organization_id) VALUES ('Nike', 1);
INSERT INTO accounts (name, organization_id) VALUES ('Adidas', 1);
INSERT INTO accounts (name, organization_id) VALUES ('Puma', 1);
INSERT INTO accounts (name, organization_id) VALUES ('Spotify', 1);
INSERT INTO accounts (name, organization_id) VALUES ('Apple Music', 1);

-- Deals for Utah State (Org ID: 1)
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (1, 1, '2020-01-01', '2025-12-31', 10000, 'build');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (1, 2, '2022-01-01', '2023-12-31', 20000, 'build');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (1, 3, '2022-01-01', '2023-12-31', 30000, 'pitch');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (1, 4, '2018-01-01', '2023-12-31', 90000, 'pitch');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (1, 5, '2019-01-01', '2028-12-31', 50000, 'pitch');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (1, 6, '2015-01-01', '2030-12-31', 40000, 'negotiation');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (1, 7, '2022-01-01', '2023-12-31', 50000, 'negotiation');

-- Accounts for BYU (Org ID: 2)
INSERT INTO accounts (name, organization_id) VALUES ('Pepsi', 2);
INSERT INTO accounts (name, organization_id) VALUES ('Coca Cola', 2);
INSERT INTO accounts (name, organization_id) VALUES ('A&W', 2);
INSERT INTO accounts (name, organization_id) VALUES ('Toyota', 2);
INSERT INTO accounts (name, organization_id) VALUES ('FedEx', 2);
INSERT INTO accounts (name, organization_id) VALUES ('UPS', 2);

-- Accounts for BYU (Org ID: 2)
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (2, 1, '2022-01-01', '2023-12-31', 10000, 'build');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (2, 2, '2022-01-01', '2023-12-31', 20000, 'build');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (2, 3, '2022-01-01', '2023-12-31', 20000, 'build');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (2, 4, '2022-01-01', '2023-12-31', 30000, 'pitch');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (2, 5, '2022-01-01', '2023-12-31', 40000, 'negotiation');
INSERT INTO deals ( organization_id, account_id, start_date, end_date, value, status)
     VALUES (2, 6, '2022-01-01', '2023-12-31', 50000, 'negotiation');
```

## What decisions did you end up making?

I used styled-components for styling and MUI for the filter components because they have a clean, smooth design. I installed Axios to handle the API call because it takes care of a lot out of the box and I'm use to it.

## What assumptions did you make?

I figured I could do everything I needed with one GET request by just changing the parameters for status and year. I originally thought that Build, Pitch, and Negotiation were the account names and the items listed under them were the deals, but on closer inspection, I realized they were actually sections, and the items under them were accounts with multiple deals.

## What would you have done if you had more time?

• Add the net and probability values like in the example.

• Creating auth and associating certain organizations with certain users, then if they tried to access an organization they don't own, it would show an error page.

• Organizing the deals logic and state into a custom useDeals hook

• Set up controllers and models for better organization, reusability, and even testability.

• Designed a cleaner UI with loading states and better feedback when no deals are found.

## Feedback

Giving instructions on how to add data to the database might be helpful but if the goal was to test resourcefulness, I think it was fine.

I did have a bit of trouble understanding what represented the accounts and what represented the deals on the example page, so maybe making that a bit clearer would help.

## Questions

• How does sponsorship work in this context? is this just amounts of money another account / business is pledging to someone's org?

• Why did the middle column pitch, have deals with no dollar amounts?

• Why are there deals in general with no dollar amounts?
are there other sections in the deal pipeline, or is it always these 3?

## Thank you! This was fun to work on!
