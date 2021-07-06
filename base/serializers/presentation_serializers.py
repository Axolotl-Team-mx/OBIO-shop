from rest_framework import serializers
from base.models import Products, Reviews, Presentation

class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presentation
        fields = '__all__'
