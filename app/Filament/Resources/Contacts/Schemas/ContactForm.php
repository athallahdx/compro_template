<?php

namespace App\Filament\Resources\Contacts\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ContactForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Textarea::make('address')
                    ->label('Alamat')
                    ->rows(3)
                    ->columnSpanFull(),
                TextInput::make('whatsapp')
                    ->label('WhatsApp')
                    ->tel()
                    ->maxLength(255),
                TextInput::make('email')
                    ->label('Email')
                    ->email()
                    ->maxLength(255),
                TextInput::make('instagram')
                    ->label('Instagram')
                    ->url()
                    ->maxLength(255),
                TextInput::make('facebook')
                    ->label('Facebook')
                    ->url()
                    ->maxLength(255),
                TextInput::make('linkedin')
                    ->label('LinkedIn')
                    ->url()
                    ->maxLength(255),
            ]);
    }
}
