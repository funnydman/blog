from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=250, blank=False, unique_for_date="pub_date")
    content = RichTextUploadingField()
    pub_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
