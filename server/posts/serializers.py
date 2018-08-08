from rest_framework import serializers, permissions

from .models import Post, Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'author', 'content', 'post')


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'pub_date', 'last_modified', 'comments')
        read_only_fields = ('id', 'pub_date')
