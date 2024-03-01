const express = require('express');
const app = express();
const port = 8000; 
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index'); 
});
app.get('/contact', (req, res) => {
    res.render('contact'); 
});
app.get('/aboutme', (req, res) => {
    res.render('aboutme'); 
});
app.get('/aboutus', (req, res) => {
    res.render('aboutus'); 
});
app.get('/service-detail', (req, res) => {
    res.render('servicedetail'); 
});
app.get('/blog', (req, res) => {
    res.render('blog'); 
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
