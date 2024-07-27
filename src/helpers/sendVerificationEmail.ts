import { resend } from '@/lib/resend'
import VerificationEmail from '../../emails/VerificationEmail'
import { string } from 'zod'
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail (
    email : string,
    username : string,
    verifyCode : string,
) : Promise<ApiResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Anonymouse_me Verification Code',
            react: VerificationEmail({username,otp : verifyCode}),
          });
          console.log("Hello")
        return {success : true, message : 'Verification email send Successfully'}
    } catch (emailError) {
        console.log("Error sending verification email", emailError);
        return {success : false, message : 'Failed to send verification email'}
    }
}