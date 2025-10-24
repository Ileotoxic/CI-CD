module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        // Bạn có thể thêm các quy tắc tùy chỉnh ở đây sau
        "no-unused-vars": "warn" // Cảnh báo nếu có biến không sử dụng
    }
};
