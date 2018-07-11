from ckeditor.fields import RichTextField
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=250)
    context = RichTextField()

    def __str__(self):
        return self.title
