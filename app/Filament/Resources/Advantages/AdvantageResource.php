<?php

namespace App\Filament\Resources\Advantages;

use App\Filament\Resources\Advantages\Pages\CreateAdvantage;
use App\Filament\Resources\Advantages\Pages\EditAdvantage;
use App\Filament\Resources\Advantages\Pages\ListAdvantages;
use App\Filament\Resources\Advantages\Schemas\AdvantageForm;
use App\Filament\Resources\Advantages\Tables\AdvantagesTable;
use App\Models\Advantage;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class AdvantageResource extends Resource
{
    protected static ?string $model = Advantage::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema
    {
        return AdvantageForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AdvantagesTable::configure($table);
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
            'index' => ListAdvantages::route('/'),
            'create' => CreateAdvantage::route('/create'),
            'edit' => EditAdvantage::route('/{record}/edit'),
        ];
    }
}
