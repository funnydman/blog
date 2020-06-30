from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=32)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=250, blank=False, unique_for_date="pub_date")
    content = RichTextUploadingField()
    categories = models.ManyToManyField(Category)
    pub_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)

    def get_categories(self):
        return "\n".join([c.name for c in self.categories.all()])

    def __str__(self):
        return self.title
