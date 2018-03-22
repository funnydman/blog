from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=250)
    context = models.TextField()
    image = models.ImageField(upload_to='posts')

    def __str__(self):
        return self.title




