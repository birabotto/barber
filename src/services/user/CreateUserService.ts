interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    console.log(name);
    console.log(email);
    console.log(password);
    return { ok: true };
  }
}

export { CreateUserService };
