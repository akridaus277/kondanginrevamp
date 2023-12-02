<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailVerificationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $token;
    public $userId;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name,$token,$userId)
    {
        $this->name = $name;
        $this->token = $token;
        $this->userId = $userId;

        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Subject of the email')
                    ->view('emails.emailVerification')
                    ->with([
                        'verificationLink' => env('REACT_APP_URL').'/email/verify/'.$this->userId.'/'.$this->token,
                        'name' => $this->name
                    ]);
    }

}
