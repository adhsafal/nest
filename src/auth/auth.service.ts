import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return {
      data: {
        message: 'Hello, user I am signed up',
        'status-code': 400,
        'status-message': 'Signup successful !',
      },
    };
  }

  signin() {
    return {
      data: {
        message: 'Hi, I am signed in',
        'status-code': 400,
        'status-message': 'Signin successful !',
      },
    };
  }
}
