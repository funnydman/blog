from django.contrib import admin

from .models import Post, Comment

admin.site.register(Post)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'author')


admin.site.register(Comment, CommentAdmin)
