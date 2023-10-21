import { z } from 'zod';

const localfeaturedValidation = z.object({
  body: z
    .object({
      websiteUrl: z.string({
        required_error: 'WebsiteUrl is required',
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      firstName: z.string({
        required_error: 'First Name is required',
      }),
      lastName: z.string({
        required_error: 'Last Name is required',
      }),
      password: z
        .string({
          required_error: 'Password is required',
        })
        .min(6, {
          message: 'Password must be at least 6 characters',
        })
        .max(20, {
          message: 'Password must be at most 20 characters',
        })
        .refine(
          password => {
            // Custom password validation
            const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
            const lowercaseCount = (password.match(/[a-z]/g) || []).length;
            const digitCount = (password.match(/\d/g) || []).length;

            return (
              uppercaseCount >= 2 && lowercaseCount >= 2 && digitCount >= 4
            );
          },
          {
            message:
              'Password must contain at least 2 uppercase letters, 2 lowercase letters, and 4 numbers',
          },
        ),
      confirmPassword: z
        .string({
          required_error: 'Confirm Password is required',
        })
        .min(6, {
          message: 'Confirm Password must be at least 6 characters',
        })
        .max(20, {
          message: 'Confirm Password must be at most 20 characters',
        }),
      termsOfUse: z.boolean({}).refine(data => data === true, {
        message: 'Terms of Use is required',
      }),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Password and Confirm Password must be same',
    }),
});

export const automationValidation = {
  localfeaturedValidation,
};
