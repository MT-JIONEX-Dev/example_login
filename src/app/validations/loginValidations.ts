export function validateLoginFields(username: string, password: string): string | undefined {
  if (!username && !password) {
    return 'Both username and password are required.';
  } else if (!username) {
    return 'Username is required.';
  } else if (!password) {
    return 'Password is required.';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return 'Username must contain only letters and numbers.';
  } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return 'Password must contain only letters and numbers.';
  }
  return undefined;
} 