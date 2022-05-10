const users = [
    {
        name: 'admin',
        pw: 'hunter'
    }
];

const CORRECT = '🟩';
const WRONG_POSITION = '🟨';
const INCORRECT = '🟥';

const getWordleResult = (guess = '', password) => {
    // If guess === password, return success
    if (guess === password) {
        return {
            success: true,
            lettersUsed: [],
            result: [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]
        };
    }

    // For each letter in the guess, check if it is in the password
    const chars = guess.split('');
    const passwordChars = password.split('');

    // The result should return 🟩🟨🟥 based on the letters
    const result = chars.reduce((acc, letter, index) => {
        if (letter === password[index]) {
            acc.push(CORRECT);
        } else if (passwordChars.find((c) => letter === c)) {
            acc.push(WRONG_POSITION);
        } else {
            acc.push(INCORRECT);
        }

        return acc;
    }, []);

    return {
        success: false,
        lettersUsed: chars,
        result
    };
};


const handler = (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(({ name }) => name === username);

        if (!user) {
            res.status(404).json('User Not Found');
        } else {
            const { pw } = user;
            const result = getWordleResult(password, pw);
            res.status(200).json(result);
        }
    } catch (e) {
        res.status(500).json('Passwordle Computation Error, Please Seek Assistance');
    }
};

export default handler;
