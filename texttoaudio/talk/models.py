from django.db import models

class AudioPalabras(models.Model):
    audio = models.CharField(max_length=300)
    nombre = models.CharField(max_length=300)
    