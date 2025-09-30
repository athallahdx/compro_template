<?php

namespace App\Filament\Resources\Mottoes;

use App\Filament\Resources\Mottoes\Pages\CreateMotto;
use App\Filament\Resources\Mottoes\Pages\EditMotto;
use App\Filament\Resources\Mottoes\Pages\ListMottoes;
use App\Filament\Resources\Mottoes\Schemas\MottoForm;
use App\Filament\Resources\Mottoes\Tables\MottoesTable;
use App\Models\Motto;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class MottoResource extends Resource
{
    protected static ?string $model = Motto::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;


    protected static ?string $label = 'Motto';
    protected static ?string $pluralLabel = 'Motto';
    protected static ?string $recordTitleAttribute = 'motto';

    public static function form(Schema $schema): Schema
    {
        return MottoForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MottoesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListMottoes::route('/'),
            'create' => CreateMotto::route('/create'),
            'edit' => EditMotto::route('/{record}/edit'),
        ];
    }
}
