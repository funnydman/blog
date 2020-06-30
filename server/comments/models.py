from django.contrib.auth.models import User
from django.db import models

from posts.models import Post


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=500)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    is_moderated = models.BooleanField(default=False)

    def __str__(self):
        return self.post.title
