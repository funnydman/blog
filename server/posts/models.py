from ckeditor.fields import RichTextField
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=250)
    context = RichTextField()
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
