<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordResetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $token;
    public $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name,$token,$email)
    {
        $this->name = $name;
        $this->token = $token;
        $this->email = $email;

        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Reset Password - Kondangin')
                    ->view('Emails.passwordReset')
                    ->with([
                        'passwordResetLink' => env('REACT_APP_URL').'/password/reset/'.$this->token.'/'.urlencode($this->email),
                        'name' => $this->name
                    ]);
    }

}
