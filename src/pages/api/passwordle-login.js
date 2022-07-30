import prisma from '../../lib/prisma';

const CORRECT = '🟩';
const WRONG_POSITION = '🟨';
const INCORRECT = '🟥';

const getUser = async (username) => {
    return await prisma.user.findUnique({
        where: { username },
    });
};

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


const handler = async (req, res) => {
    try {
        const { username, password: guess } = req.body;
        // const user = users.find(({ name }) => name === username);
        const user = await getUser(username);

        if (!user) {
            res.status(404).json('User Not Found');
        } else {
            const { password } = user;
            const result = getWordleResult(guess, password);
            res.status(200).json(result);
        }
    } catch (e) {
        res.status(500).json('Passwordle Computation Error, Please Seek Assistance');
    }
};

export default handler;
