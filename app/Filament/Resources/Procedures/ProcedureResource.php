<?php

namespace App\Filament\Resources\Procedures;

use App\Filament\Resources\Procedures\Pages\CreateProcedure;
use App\Filament\Resources\Procedures\Pages\EditProcedure;
use App\Filament\Resources\Procedures\Pages\ListProcedures;
use App\Filament\Resources\Procedures\Schemas\ProcedureForm;
use App\Filament\Resources\Procedures\Tables\ProceduresTable;
use App\Models\Procedure;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ProcedureResource extends Resource
{
    protected static ?string $model = Procedure::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema
    {
        return ProcedureForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ProceduresTable::configure($table);
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
            'index' => ListProcedures::route('/'),
            'create' => CreateProcedure::route('/create'),
            'edit' => EditProcedure::route('/{record}/edit'),
        ];
    }
}
