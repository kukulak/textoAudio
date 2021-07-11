from django.db import models
from django.urls import reverse


class Audio(models.Model):
    nombre = models.CharField(max_length=300)
    audio = models.FileField(upload_to='audios/%Y/%m/%d')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nombre

class AudioPalabra(models.Model):
    nombre = models.CharField(max_length=300)
    slug = models.SlugField(max_length=200, unique=True)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    description = models.TextField(blank=True)
    audio = models.ManyToManyField(Audio)

    class Meta:
        ordering = ('nombre',)
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.nombre

    # def get_absolute_url(self):
    #         return reverse('shop:product_detail',
    #                        args=[self.id, self.slug])
