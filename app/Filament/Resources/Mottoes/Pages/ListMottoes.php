<?php

namespace App\Filament\Resources\Mottoes\Pages;

use App\Filament\Resources\Mottoes\MottoResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListMottoes extends ListRecords
{
    protected static string $resource = MottoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
