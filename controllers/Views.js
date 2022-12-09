
const root = (req, res) => res.send('<h1>The Homepage</h1>');

const test = (req, res) => res.json({
    status: 200,
    message: 'Views Test Route reporting for duty..'
});

export { root, test }