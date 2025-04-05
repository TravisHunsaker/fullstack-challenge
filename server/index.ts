import express from 'express';
import cors from 'cors';
import initializeDatabase from './db';
const app = express();
const port = process.env.PORT || 3000;

const db = initializeDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	const rows = db.prepare('SELECT * FROM organizations').all();
	res.json({ message: 'Welcome to the server! 🎉', rows });
});

app.get('/api/organizations/:orgId/deals', (req, res) => {
	const { status, year } = req.query;
	const orgId = req.params.orgId;

	const sql = `
        SELECT 
            d.id, 
            d.value, 
            d.status, 
            d.start_date, 
            d.end_date,
            a.name AS accountName
        FROM 
            Deals d
        JOIN 
            Accounts a ON d.account_id = a.id
        WHERE 
            d.organization_id = ?
            AND (? = '' OR d.status = ?)
            AND (? = '' OR 
                (strftime('%Y', d.start_date) <= ? AND strftime('%Y', d.end_date) >= ?))
        ORDER BY 
            d.status, a.name
    `;

	try {
		const deals = db
			.prepare(sql)
			.all(orgId, status, status, year, year, year);
		res.json({ deals });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to fetch deals' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
