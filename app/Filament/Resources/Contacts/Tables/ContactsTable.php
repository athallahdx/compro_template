<?php

namespace App\Filament\Resources\Contacts\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ContactsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('address')
                    ->label('Alamat')
                    ->limit(30)
                    ->searchable(),
                TextColumn::make('whatsapp')
                    ->label('WhatsApp')
                    ->searchable()
                    ->copyable(),
                TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->copyable(),
                TextColumn::make('instagram')
                    ->label('Instagram')
                    ->limit(30)
                    ->url(fn ($record) => $record->instagram)
                    ->openUrlInNewTab(),
                TextColumn::make('facebook')
                    ->label('Facebook')
                    ->limit(30)
                    ->url(fn ($record) => $record->facebook)
                    ->openUrlInNewTab(),
                TextColumn::make('linkedin')
                    ->label('LinkedIn')
                    ->limit(30)
                    ->url(fn ($record) => $record->linkedin)
                    ->openUrlInNewTab(),
                TextColumn::make('created_at')
                    ->label('Dibuat Pada')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->label('Diperbarui Pada')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
