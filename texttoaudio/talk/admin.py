from django.contrib import admin
from .models import Audio, AudioPalabra
# Register your models here.

@admin.register(Audio)
class AudioAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'audio', 'created']

@admin.register(AudioPalabra)
class AudioPalabrasAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'slug', 'available', 'updated']
    list_editable = ['available']
    prepopulated_fields = {'slug': ('nombre',)}