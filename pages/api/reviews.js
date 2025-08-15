import fs from 'fs';
import path from 'path';


export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const filePath = path.join(process.cwd(), 'public', 'reviews.json');
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);

        // Add new review
        data.reviews.push(req.body);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        res.status(200).json({ message: 'Review added successfully' });
    } catch (error) {
        console.error('Error handling review:', error);
        res.status(500).json({ message: 'Error saving review' });
    }
}